from setuptools import setup, find_packages

setup(
    name="upper_project",  # Name of your package
    version="0.1",  # Version of your package
    description="A Python module to convert user provided arguments to uppercase.",  # Short description
    author="Prasad Honrao",  
    author_email="honrao.prasad@gmail.com",  
    packages=find_packages(),  # Automatically discover all packages and subpackages
    install_requires=[],  # List of dependencies (leave empty if there are none)
    entry_points={
        'console_scripts': [
            'upper=upper.upper:to_upper',  # Command line utility setup
        ]
    },
    classifiers=[
        "Programming Language :: Python :: 3",  # Specify compatible Python versions
        "License :: OSI Approved :: MIT License",  # License type
        "Operating System :: OS Independent",  # OS compatibility
    ],
    python_requires='>=3.6',  # Minimum Python version
)
