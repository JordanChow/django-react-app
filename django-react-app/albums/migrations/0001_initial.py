# Generated by Django 3.2.8 on 2021-10-21 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('artist', models.CharField(max_length=100)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=2)),
            ],
        ),
    ]