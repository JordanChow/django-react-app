# Generated by Django 3.2.8 on 2021-10-27 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('albums', '0003_auto_20211027_0136'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='rating',
            field=models.DecimalField(decimal_places=1, default=None, max_digits=2),
        ),
    ]
