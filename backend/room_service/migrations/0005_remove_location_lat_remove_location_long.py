# Generated by Django 4.1.1 on 2022-10-27 19:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('room_service', '0004_apartment_units'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='location',
            name='lat',
        ),
        migrations.RemoveField(
            model_name='location',
            name='long',
        ),
    ]
