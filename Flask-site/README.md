# How to create this site
1. You will need [Python](https://www.python.org/downloads/) and a Python IDE such as Anaconda's Spyder, in that order. If [installing Anaconda on Windows](https://docs.anaconda.com/anaconda/install/windows/), check [both options in the advanced settings stage of setup](https://docs.anaconda.com/_images/win-install-options.png).
2. Download all files in this repository to a folder.

3. After installing those programs and downloading all files into a single folder, open the Anaconda prompt (should be available from your Start menu) and make sure your prompt's directory is the folder into which you downloaded the files. Attached is an image showing the name of my folder into which I downloaded the files:

![image](https://user-images.githubusercontent.com/11321449/117343965-717ab180-aed7-11eb-9b60-68c600c77185.png)


4.    Then simply enter `python` to enter the Python command prompt. From there, install all of the packages in the [requirements.txt](https://github.com/rileydlynch/Mock-projects/blob/main/Flask-site/requirements.txt) file using this command:
```python
pip install -r requirements.txt
```

5. If you encounter any errors during the installation of packages, it probably is because some packages are outdated. You can solve this by using this command to install the individual problematic package at its up-to-date version, then change your copy of the requirements.txt file to list the most up-to-date version of the package:

```python
pip install <the package's name>
```
So for example, if the MarkupSafe package fails to install, then use this command:
```python
pip install MarkupSafe
```
