# Generated by Django 4.0.5 on 2022-07-02 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room_service', '0004_alter_apartmenttype_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='apartment',
            name='name',
            field=models.CharField(default='', max_length=200),
        ),
    ]