from django.db.models.signals import post_save, post_delete, post_init
from django.dispatch import receiver
from django.db.models import F
from like.models import Like

@receiver(post_save, sender=Like)
def save_like(instance,created=False, **kwargs):

    if created:

        instance.object.__class__.objects.filter(pk=instance.object_id).update(likes_count = F('likes_count') + 1)
        from core.tasks import send_activation_email
        send_activation_email.delay(instance.object.author.id)


@receiver(post_init, sender=Like)
def watch_is_deleted(instance, **kwargs):

    instance.is_deleted_was = instance.is_deleted

@receiver(post_init, sender=Like)
def check_is_deleted(instance, **kwargs):

    if instance.is_deleted_was != instance.is_deleted:
        if instance.is_deleted:
            instance.object._class_.objects.filter(pk=instance.object_id).update(likess_count=F('likes_count') - 1)
        else:
            instance.object._class_.objects.filter(pk=instance.object_id).update(likes_count=F('likes_count') + 1)

