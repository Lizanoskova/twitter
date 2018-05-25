from django.db.models.signals import post_save, post_delete, post_init
from django.dispatch import receiver
from django.db.models import F
from post.models import Post

@receiver(post_save, sender=Post)
def save_post(instance,created=False, **kwargs):

    if created:

        instance.object.__class__.objects.filter(pk=instance.object_id).update(posts_count = F('posts_count') + 1)


@receiver(post_init, sender=Post)
def watch_is_deleted(instance, **kwargs):

    instance.is_deleted_was = instance.is_deleted

@receiver(post_init, sender=Post)
def check_is_deleted(instance, **kwargs):

    if instance.is_deleted_was != instance.is_deleted:
        if instance.is_deleted:
            instance.object._class_.objects.filter(pk=instance.object_id).update(posts_count=F('posts_count') - 1)
        else:
            instance.object._class_.objects.filter(pk=instance.object_id).update(posts_count=F('posts_count') + 1)
