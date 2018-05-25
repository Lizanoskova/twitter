from django.db.models.signals import post_save, post_delete, post_init
from django.dispatch import receiver
from django.db.models import F
from message.models import Message

@receiver(post_save, sender=Message)
def save_post(instance,created=False, **kwargs):
    print instance, created
    if created:

        instance.chat.__class__.objects.filter(pk=instance.chat.id).update(messages_count = F('messages_count') + 1)


@receiver(post_init, sender=Message)
def watch_is_deleted(instance, **kwargs):

    instance.is_deleted_was = instance.is_deleted

@receiver(post_init, sender=Message)
def check_is_deleted(instance, **kwargs):

    if instance.is_deleted_was != instance.is_deleted:
        if instance.is_deleted:
            instance.chat._class_.objects.filter(pk=instance.chat.id).update(messages_count=F('messages_count') - 1)
        else:
            instance.chat._class_.objects.filter(pk=instance.chat.id).update(messages_count=F('messages_count') + 1)
