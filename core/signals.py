from django.contrib.contenttypes.models import ContentType
from django.db.models.signals import post_save, post_delete, post_init
from core.models import EventableMixin
from event.models import Event


def saving_eventable_model(instance, created=False, **kwaegs):

    if created:
        e = Event()
        e.title=instance.get_event_title()
        e.author=instance.get_author()
        e.content_type = ContentType.objects.get_for_model(instance)
        e.object_id = instance.id
        e.save()

for model in EventableMixin.__subclasses__():
    post_save.connect(saving_eventable_model, sender = model)