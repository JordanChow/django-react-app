# Generated by Django 3.2.8 on 2021-10-27 01:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('albums', '0002_album_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='album',
            name='date',
        ),
        migrations.RemoveField(
            model_name='album',
            name='rating',
        ),
    ]
