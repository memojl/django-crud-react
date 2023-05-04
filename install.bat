ECHO OFF
cls
:: CALL pip install vitualenv
CALL python -m venv venv
ECHO -
:: CALL ./venv/Scripts/activate
ECHO Activar venv
PAUSE
ECHO -
CALL pip install django
ECHO -
CALL django-admin startproject django_crud_api .
ECHO -
:: PROBAR PROYECTO python manage.py runserver
ECHO CONFIGURAR SETTINGS drframework/settings.py
PAUSE
CALL python manage.py startapp tasks
ECHO -
CALL pip install djangorestframework
ECHO -

:Bye
PAUSE