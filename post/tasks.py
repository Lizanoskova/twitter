from twitter.celery import app


@app.task
def test():
  return True