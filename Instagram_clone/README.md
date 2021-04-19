This is a demo website which includes a MySQL database. The initial purpose was to demonstrate my ability to insert and withdraw data from a SQL database, effectively demonstrating my understanding of a website's backend. However, I have added additional functionality to this demo site to further demonstrate other technologies such as APIs. In order to test it for yourself (for free!), it's very simple, follow these steps:

1. Follow [the walkthrough here](https://gist.github.com/nax3t/2773378c4d1bada8d66d12f4d5210248) to set up Goorm, which will be your IDE.
2. Upon completion, boot up your Node.js instance and install all of the packages which are *'require'* at the top of the *main_app.js* file. Do this at the Node command prompt by inputting *npm install --save module*. Ex. To install *Multer* use the command:
> *npm install --save multer*
3. Copy over the files included in this *Instagram_clone* page. Mimic the file structure, otherwise the *main_app.js* file will have trouble finding the requisite files.
4. In the Goorm menu at the top of your screen, select Project > Running URL and Port. Set the port to 3000 and the name of your subdomain to whatever you want.
5. When you're ready to make the site live, first initialize the MySQL database by inputting: 
> mysql-ctl cli
6. When it finishes initializing, input exit. When it returns to the Node prompt, input:
> node Web_files/main_app.js
7. And your site will be live! Visit the subdomain you registered under the Project menu to see your site. Your Goorm interface should look like this, including having the same filestructure as what's listed on the lefthand pane:
![image](https://user-images.githubusercontent.com/11321449/115258944-0786ac00-a164-11eb-9b03-3ac310025dc9.png)
