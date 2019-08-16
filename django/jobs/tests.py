from rest_framework import status
from rest_framework.test import APITestCase
from .models import Job


class JobTests(APITestCase):
    def test_get_job(self):
        """
        Ensure we can retrieve a Job
        """
        pass
