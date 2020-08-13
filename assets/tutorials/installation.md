:s: Introduction
# Introduction
This tutorial will explain how to download and install Slate. By the end of the tutorial you will be able to start Slate and make your own app.
:n:
# Firewall
**You must disable any firewalls before continuing.** The firewall will prevent Slate from installing everything it needs. This includes Norton, McAfee and Windows Firewall. You should reenable the firewall after installing Slate.

:s: Downloading
# Downloading
To download Slate go to the downloads page and click the download button. Once you have downloaded the zipped file, copy the file to where you want to install Slate. It can be placed anywhere, the easiest place would be your Documents folder.;;![Download](assets/pictures/tutorials/installation/downloads.PNG)
:n:
Once you have copied the zipped file you need to extract it. Right click on the file you copied and select 'Extract All', then click on "Extract". This will extract the file which contains Slate and all the tools to get you started.
;;![Download](assets/pictures/tutorials/installation/extract.PNG)

:s: Installation
# Installation
To install Slate you need to run a couple scripts, don't worry we take care of all the hard work. You should be in the folder that you extracted the downloaded file in. Since you downloaded the alpha it should be named "slate_x64_v0.1.0_pre-alpha". Go into that folder and there will be another folder with the same name, go into that folder. You should then see a folder named slate, double click on it and you will see a bunch of folders and files. This is where you will start Slate. Before you can start Slate you need to do some setup. Open the folder called bin, you will see two files in this folder. One named "setup" and the other named "post_reboot".
:n:;;![Download](assets/pictures/tutorials/installation/bin.PNG)
The first file you will run is the "setup" script, this script will install everything Slate needs to run. It will take anywhere between 30 minutes to a hour to finish. Right click on the "setup" file and select the option "Run with Powershell". You will see a box pop up asking for your permission to install Slate, click yes and then you will see a blue window pop up. The blue screen will show some text explaining what it will do, it will ask you to "Press any key to continue...". To continue with the installation press any key on your keyboard. You will need to be patient as it can take almost an hour to install everything you need.
:n:;;![Download](assets/pictures/tutorials/installation/run_powershell.PNG)
When it is done you will see some text at the bottom that will say "Please reboot your computer and run the post_reboot script." Go ahead and press any key on your keyboard, the blue window will disapear and you will need to restart your computer.
:n:;;![Download](assets/pictures/tutorials/installation/setup_done.PNG)

:s: Finish Installation
# Finish Installation
Once your computer has finished rebooting we need to run one more file. Navigate back into the "bin" folder. You will need to run the other script the same way as the previous one. Right click on "post_reboot" and then select "Run with Powershell". 
:n:;;![Download](assets/pictures/tutorials/installation/post_reboot.PNG)
:n:
This script will make a blue window pop up same as before, and then ask you if you want to execute this file. Type one "y" and then press enter, this will take much less time than the previous one. :n:;;![Download](assets/pictures/tutorials/installation/execution_policy.PNG):n:
When the script is almost finished it will ask you to accept some android licenses, these are so you can make android apps. Type "y" and press enter, you will need to do this a few times as there are several. :n:;;![Download](assets/pictures/tutorials/installation/accept.PNG);;![Download](assets/pictures/tutorials/installation/accept_2.PNG):n:
Once you have accepted the licenses you will see some output with green (and maybe red) check boxes, this means eveything is working as expected. Press any key on your keyboard to finish. The blue window will disappear and Slate is ready.
:n:;;![Download](assets/pictures/tutorials/installation/done.PNG)
