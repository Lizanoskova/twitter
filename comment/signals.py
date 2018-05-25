from django.db.models.signals import post_save, post_delete, post_init
from django.dispatch import receiver
from django.db.models import F
from comment.models import Comment


@receiver(post_save, sender=Comment)
def save_comment(instance,created=False, **kwargs):

    if created:

        instance.object._class_.objects.filter(pk=instance.object_id).update(comments_count = F('comments_count') + 1)


@receiver(post_init, sender=Comment)
def watch_is_deleted(instance, **kwargs):

    instance.is_deleted_was = instance.is_deleted

@receiver(post_init, sender=Comment)
def check_is_deleted(instance, **kwargs):

    if instance.is_deleted_was != instance.is_deleted:
        if instance.is_deleted:
            instance.object._class_.objects.filter(pk=instance.object_id).update(comments_count=F('comments_count') - 1)
        else:
            instance.object._class_.objects.filter(pk=instance.object_id).update(comments_count=F('comments_count') + 1)

