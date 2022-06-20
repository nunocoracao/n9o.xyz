---
title: "How I started my own Homepage for free using Docker, Hugo, and Firebase"
date: 2022-06-19
draft: true
 
categories: ["Development", "Tutorial"]
tags: ["Development", "Environment", "Tutorial", "Hugo", "Congo", "Docker", "VSCode", "Go"]
summary: "Currently there are several solutions to build and host your personal website. I wanted to challenge myself to see if I could do it with the same set of features as some of the paid solutions out there and for free. Here are the results."
 
showSummary: true
 
---
 
![Example](banner.png "")
 
 
## TL;DR

Currently there are several solutions to build and host your personal website. I wanted to challenge myself to see if I could do it with the same set of features as some of the paid solutions out there and for free. Here are the results.
 
## Why would a PM build their own homepage from scratch…
 
A couple of months ago I decided that I wanted to start writing more in order to a) exercise my writing skills and b) get feedback on some of my ideas. With this goal in mind, I started researching tools/platforms that would help me publish without creating too much friction for me, nor for the people wanting to read what I have to say e.g. having to pay. Ultimately I decided upon creating my own website.
 
I had a couple of reasons for wanting to try this:
 
- challenge myself to see if I, a previous software engineering student, could still bodge something together that would work and feel good about not having forgotten everything I ever learned about programming,
 
- find a flexible free solution that would allow me to kickstart my website without start investing money right away into it, aka avoiding operational costs with platforms and services that would lock me in the future,
 
- have my content hosted in a place that will not require people to pay for reading it

- play around with Docker developer environments

{{< alert >}}
Note: If you just want to clone a repo with the final skeleton already build feel free to clone the following repo and skip to the deploy section
 
```
git clone https://github.com/nunocoracao/homepage-hugo-congo
```
 
{{</ alert >}}
 
## Let’s get started…
 
After some research I decided to choose a website generator framework and a free hosting service. For the website framework I choose <a target=”_blank” href="https://gohugo.io">Hugo</a> and the hosting service <a target="_blank" href="https://firebase.google.com">Firebase</a>. And for obvious reasons I decided to my development environment using <a target=”_blank” href="https://www.docker.com">Docker</a> in order to put myself in the user shoes for this experiment. 
 
{{< alert >}}
**Disclaimer:** I am perfectly aware that this might not be the best solution out there for what I am trying to achieve. If you think there’s either a) a better way to do it or b) a smarter solution from scratch feel free to reach out.
{{< /alert >}}


## Requirements
 
For this guide I will use the following software, which should be installed in your machine. Here is a small explanation on what each component is going to be used for and a link to the installation instructions.

- **Docker** - I will use Docker to configure a development environment for this project so that we can skip the need to install all the software required to run Hugo and Firebase CLI i.e. CuRL, Go, Hugo,Node, NPM, etc. This will allow you to start from a git repository, start the environment and go straight into writing code instead of spending hours figuring out how to install a specific compiler for your CPU architecture. <a target=”_blank” href="https://www.docker.com/get-started/">Install Docker</a>
 
- **Visual Studio Code** - I'm using Visual Studio Code as my integrated development environment (IDE) at the moment, and all the material in the guide assumes that this is what you're using. If you have a different preference for your IDE you’ll need to adapt some parts of this guide to achieve the same results. <a target=”_blank” href="https://code.visualstudio.com/">Install Visual Studio Code</a>
 
- **Remote - Containers** - This is a VSCode extension that will allow you to spin the GitHub repo inside a container with a couple of clicks. Highly recommend this one to save you time.
 

## Setup local environment

Let's start by configuring your development environment using <a target=”_blank” href="https://www.docker.com">Docker</a>. This will allow you to create a container with all the tools you need inside of it without having to mess with your system configurations. Moreover, it will also make it easier to just delete the container and rebuild it whenever you need it instead of keeping old versions of software you don't require daily in your personal machine.
 
Start by cloning the GitHub repository with the development environment condigurations.
 
```
git clone https://github.com/nunocoracao/homepage-kickstart
```
 
{{< alert >}}
**Note:** If you want to install everything locally feel free to go straight into Hugo's website and follow their guide. You can pick up here once you have Hugo installed and they ask you to create your first website.
{{< /alert >}}

After successfully cloning the repo, open that folder in VSCode and open the “Remote - Containers” extension panel on the left. Select "Open folder in container" to spin up a container with the development environment.

![Example](setup/extension.png "")

Wait a couple of minutes while the image is built. Docker is creating an image with all the required software for the development of the website. This will only happen the first time you spin the environment.

![Example](setup/imagebuild.png "")

Once the build is done, VSCode will spin the container and will place you working environment inside of it (information available in the bottom left corner of the window). Once that is done open, you now have a development environment with Go, Hugo, FirebaseCLI, and all the tools you will need for this guide. Just open a new terminal and you’re ready to begin creating your site.

![Example](setup/newterminal.png "")



## Create Site Skeleton

Now that we have a development environment running the first step is to create the base version of your website. For this let’s use **Hugo** to generate the folder template and configuration files we need by running the following command:
 
```
hugo new site . --force
```
This should have created a set of folders inside your workspace that you don’t need to worry about for now. Next step is to install a theme for Hugo. I choose <a target="_blank" href="https://github.com/jpanther/congo">Congo</a> as it had all the features I required for my website and it seemed to be easy to change if I ever need it to. If you want to try a different theme there are several available in Hugo’s documentation, each with documentation and examples. 
 
Install Congo using git submodules by running the following command:
 
```
git submodule add -b stable https://github.com/jpanther/congo.git themes/congo
```

Now we need to make some changes to the directory and file structure so that Congo can work properly. I will not get into the details of what is happening in this guide (you can consult Congo’s documentation if you want to learn more), the main takeaway is that we’re creating and configuring a folder in <code>config/_default/</code> which will contain all the important configuration files for Hugo and Congo. 
 
Please run the following commands in order:
 
```
mkdir config
mkdir config/_default
rm config.toml
cp themes/congo/config/_default/*.toml config/_default/
echo 'theme = "congo"' | cat - config/_default/config.toml > temp && mv temp config/_default/config.toml
```

Congratulations, you should have your site up and running now. Let's try it out by running Hugo's debug server:
 
```
hugo server -D
```
 
Please open your favorite browser and navigate to <a target="_blank" href="http://localhost:1313">localhost:1313</a> to see your page.
 
![Example](theme/vanilla.png "")
 
You should see something similar to the image above. Doesn’t look that exciting does it? Let’s configure the theme in the next sections and learn how to create your first aricle.



## Configure Theme

Now I’ll be covering how to change the look and feel of your website, add some personal information, and activate the dark mode toggle (aka the most important feature in any website these days). A note, I am covering a very simple configuration for this theme please check <a target="_blank" href="https://jpanther.github.io/congo/docs/">Congo’s theme documentation</a> for a full deep dive on everything you can do with this theme.
 
### Profile picture
 
Let’s start by adding a profile picture to your site. Create a folder called “assets” in the root of your project. You can use VSCode interface your type in the command:
 
```
mkdir assets
```
 
Choose a profile picture and place it inside the assets folder. The rest of the guide will assume the final picture is named "profile.jpg", so please rename your picture or take that into account when configuring some of the other files. 

{{< alert >}}
Note: If you still need to take a proper awesome picture feel free to download the one below to proceed with the tutorial.
{{</ alert >}}
 
![Example](configure/profile.jpg "")

### Configuration Files

Let’s open a couple of configuration files and start updating them. All the files we are going to change are inside <code>config/_default/</code> folder.

#### config.toml
 
Uncomment the <code>baseURL</code> parameter and replace it with the final domain of your website. This value will be used to create the robots.txt file for any search engines to successfully crawl and index your website.
 
![Example](configure/config.png "")

{{< alert >}}
Note: if you want to configure Google Analytics please add the following line with your id to this file
```
googleAnalytics = "G-XXXXXX"
```
{{</ alert >}}
 
#### languages.en.toml
 
This file will drive the main information for the website and the author of the page (you). Replace the <code>title</code> and <code>description</code> for the ones you want for your page, these values will drive the HTML title and description tags.
 
Under the tage <code>[author]</code> you can update the details that you wish to highlight in your profile. The bare minimum would be <code>name</code>, <code>image</code>, <code>headline</code>, and <code>links</code>. For the links parameters don't forget to uncomment the last line of the file as this is a json array. In my files I have uncommented the lines I wanted to use and left the others in the file if I want to play around with them in the future.
 
![Example](configure/languages.png "")
 
#### params.toml
 
This file defines much of the overall behaviour across the entire framework. For this tutorial I changed some of the overall values and one for the homepage, if you want to learn more about the other available configurations please consult <a target="_blank" href="https://jpanther.github.io/congo/docs/">Congo’s theme documentation</a>. I've changed <code>colorScheme</code> to "ocean" which changes the global UI theme. Congo defines a three-colour palette that is used throughout the theme. Each main colour contains ten shades which are based upon the colours that are included in Tailwind. Valid values are congo (default), avocado, ocean, fire and slate. Although these are the default schemes, you can also create your own. Refer to Congo's main documentation to learn how.

Activated <code>showAppearanceSwitcher</code> to enable the light/dark mode toggle. Activated <code>enableSearch</code> which indexes all future posts each time you build the site and provides a simple search feature. And finally,changed the value of <code>layout</code>, inside <code>[homepage]</code>, to "profile". Another interesting value here is <code>showRecent</code>, which when turned on shows the recent posts on the homepage.
 
![Example](configure/params.png "")

 
### Final
 
Let’s see how it looks, run the Hugo again:
 
```
hugo server -D
```
 
And navigate to <a target="_blank" href="http://localhost:1313">localhost:1313</a> you should see something similar to the page below.
 
![Example](configure/final.png "")
 
Congrats it’s looking great, let’s learn how to generate your first articles.

## How to generate articles
 
Hugo provides some tools to generate your articles (markdown files) with a base set of tags already in them. Run the following command to create you first post
 
```
hugo new posts/my-first-post.md
```
 
replace the contents of the file with the following:
 
```
---
title: "My Published Post"
date: 2022-06-19T20:10:29Z
draft: false
categories: ["published", "test"]
tags: ["first", "awesome"]
---
 
This is my first blog post
```
 
This just created your first blog post. We've added a couple of categories and tags, which will be indexed by Hugo during build time. These tags will be used to create the Categories and Tags section of the website automatically for you. Notice that I've changed the <code>draft</code> to false to simulate a published post.
 
Run the following command to create you second post
 
```
hugo new posts/my-draft-post.md
```
and replace the contents of that file with the following:
 
```markdown
---
title: "My Draft Post"
date: 2022-06-19T20:20:39Z
draft: true
categories: ["draft", "test"]
tags: ["second", "awesome"]
---
 
This is my second blog post
```
For the second post, I've left the <code>draft</code> parameter true to simulate a draft post.
 
Hugo automatically hides draft posts from the final site generation. You can keep working on articles leaving the draft label true and they will be ignored by the engine. If you want to run in DEBUG mode just use the command:
 
```
hugo server -D
```
 
If you go to the posts in the site you should be able to see both entries. If you then run the server in normal mode the draft articles will disappear. You can use the command below to do so:
 
 
```
hugo server
```
 
You can use this command to test the final version of the website or an article before generating the final build. When you're ready just use the command 'hugo' to generate the final website inside the /public folder.
 
```
hugo
```
 

## Deploy
 
Ok, you’ve configured your website, created a couple of articles, but we still need to deploy it somewhere. As I mentioned before for this guide I choose Firebase, even though I now that it offers much more than just a simple hosting service it allows me to host my site for free without much of a hassle.
 
### Create Firebase Project
 
Let’s start by going to <a target="_blank" href="https://firebase.google.com">https://firebase.google.com</a> and creating an account. Once that is done you can create a project for free. The process should be straightforward and when you finish you should be in Firabase project dashboard like in the image below.

### Setup Firebase
 
Now you can go back to your environment which already has Firebase CLI tools installed and ready to go. Let’s start by authenticating using:
 
```
firebase login
```
Once you are successfully logged in you need to initiate the project configurations for firebase. For that please use:
 
```
firebase init
```
 
The tool will offer you a wide variety of different options in order to configure your firebase project. For now we just want to configure hosting:
 
<img src="deploy/firebasehosting.png"/>
 
Choose the Firebase project created before as the hosting destination. And select the configurations you wish for the deploy process. The important one here is the folder where the final files to the server will be placed and this is the <code>public</code> folder. For the other parameters you experiment what better matches your use-case, the image below shows you what I picked.
 
<img src="deploy/fbhostingep.png"/>
 
### Deploy
 
Ok, not for the long and boring process of deploy… joking! Once you are ready and have all your files generated by the <code>hugo</code> command in the public folder just use the following command to deploy:
 
```
firebase deploy
```
 
<img src="deploy/firebasedeploy.png"/>
 
The process should take a couple of seconds and there you go your site is deployed. The final line of the CLI tool will give you a URL to see for yourself, otherwise you can explore your Firebase dashboard hosting section which will have more information regarding the deployment.
 
<img src="deploy/final.png"/>

## Conclusion

By now you should have a simple version of your website and can now configure it to your needs. The main advantage of this solution is that it is flexible and extensible to your needs (might require some coding for complex features) and above all it’s cheap if you're looking to begin and can't (or don't want to) spend any money on it.
 
Hope this guide helps you, feel free to share with your network and provide feedback so that I can make it better over time. 

## Resources

- [GitHub Repo for development environment](https://github.com/nunocoracao/homepage-kickstart)
- [GitHub Repo for base Hugo and Congo configuration](https://github.com/nunocoracao/homepage-hugo-congo)
- [Hugo\'s Documentation](https://gohugo.io/documentation/)
- [Congo\'s Documentation](https://github.com/jpanther/congo)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)