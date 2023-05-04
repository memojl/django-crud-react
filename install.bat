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
CALL python manage.py startapp tasks
ECHO -
ECHO CONFIGURAR SETTINGS drframework/settings.py
PAUSE
CALL python manage.py migrate
:: PROBAR PROYECTO python manage.py runserver
ECHO -
CALL pip install djangorestframework
ECHO -
CALL pip install django-cors-headers
ECHO -
ECHO CONFIGURAR SETTINGS drframework/settings.py
PAUSE
CALL python manage.py makemigrations
ECHO -
CALL python manage.py migrate
ECHO -
PAUSE
CALL python manage.py createsuperuser
PAUSE
CALL pip install coreapi
ECHO -

:Bye
PAUSE