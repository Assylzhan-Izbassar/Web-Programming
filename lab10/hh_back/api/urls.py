from django.contrib import admin
from django.urls import path
from api.views import company_list, company_detail, company_vacancy, VacancyListAPIView, VacancyDetailAPIView, VacancyTopTenAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancy),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', VacancyTopTenAPIView.as_view()),
]
