# Generated by Django 3.2.8 on 2021-10-22 01:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('albums', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='date',
            field=models.DateField(null=True),
        ),
    ]
