# docs/conf.py

# -- Project information -----------------------------------------------------
project = 'Landing Page 5ds Website'
copyright = '2024, Fatma Chakhari/5ds'
author = 'Fatma Chakhari'

# -- General configuration ---------------------------------------------------
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.intersphinx'
]
templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------
html_theme = 'alabaster'
html_static_path = ['_static']
