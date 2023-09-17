# Generated by Django 4.2.5 on 2023-09-10 21:52

from django.db import migrations, models
import validators.product_validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='product', max_length=200, unique=True)),
                ('type', models.CharField(choices=[('meat', 'Meat'), ('fish', 'Fish'), ('vegetable', 'Vegetable'), ('fruit', 'Fruit'), ('nut', 'Nut'), ('liquid', 'Liquid'), ('eggs', 'Eggs'), ('diary', 'Diary'), ('cereals', 'Cereals'), ('oil', 'Oil')], max_length=10)),
                ('calories', models.FloatField(default=0.0, validators=[validators.product_validators.validate_calories])),
                ('cost', models.FloatField(default=0.0, validators=[validators.product_validators.validate_cost])),
            ],
        ),
    ]
