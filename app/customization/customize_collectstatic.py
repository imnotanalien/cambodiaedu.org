"""
Write ignore files for collectstatic.
Customizing the ignored pattern list.
"""

from django.contrib.staticfiles.apps import StaticFilesConfig


class MyStaticFilesConfig(StaticFilesConfig):
    ignore_patterns = ["CVS", ".*", "*~", "*.html"]  # custom ignore files list.
