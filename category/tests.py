import unittest
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from category.models import Category
from core.models import User

class CategoryTests(APITestCase):
    def setUp(self):

        super(APITestCase, self).setUp()
        user = User.objects.create_user('test_user', 'test_user@mail.ru', '12345')
        self.current_user = user
        self.client.force_login(user = user)

    def test_create_category(self):
        url = reverse('category-list')
        data = {'title': 'TestCategory', 'content_type':'post'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Category.objects.count(), 1)
        self.assertEqual(Category.objects.get().title, 'TestCategory')
