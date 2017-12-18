---
layout: page
title: Tutorial
permalink: /Tutorial/
published: true
---

## Installation of VMD and NAMD in Ubuntu  
![209055aa-1311-49bd-8793-075a79aac185.png]({{site.baseurl}}/209055aa-1311-49bd-8793-075a79aac185.png)  


While Nanoscale Molecular Dynamics (NAMD) is a computer software for molecular dynamics simulation, Visual molecular dynamics (VMD) is a molecular modelling and visualization computer program. Though these programs are easy to install, installing these programs can be a pain in arse for the ones who are new to Linux(Ubuntu). Here, I will give you the simplest method to install these programs.  
### NAMD 
1. First of all download the latest version of NAMD for your system. Since I use 64 bit Ubuntu, I will download the latest NAMD version [from](http://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=NAMD)  
2. Then extract the contents of the folder in your current directory, in my case NAMD_CVS-2017-03-30_Linux-x86_64-multicore.tar.gz by using this command in terminal
```sh
$ tar -zxvf NAMD_CVS-2017-03-30_Linux-x86_64-multicore.tar.gz  
```  
3. Now change directory to the extracted folder for NAMD by using this command in terminal  
```sh
$ cd NAMD_CVS-2017-03-30_Linux-x86_64-multicore 
```  
4. Finally, in terminal, type  
```sh
$ sudo cp namd2 /usr/local/bin
```  
In this way you can install NAMD in Ubuntu (LINUX)
### VMD  
1. Download the latest 64 bit version of VMD for LINUX [from](http://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=VMD)  
2. Extract the contents of the folder in your current directory, in my case vmd-1.9.2.bin.LINUXAMD64-RHEL5.opengl.tar.gz by using this command in terminal  
```sh
$ tar -zxvf vmd-1.9.2.bin.LINUXAMD64-RHEL5.opengl.tar.gz
```  
3. Now change directory to the extracted folder for VMD by using this command in terminal  
```sh
$ cd vmd-1.9.2
```  
4. Then type  
```sh
$ ./configure LINUXAMD64
```  
5. Change the directory to /src using  
```sh
$ cd src
```  
6. Finally, type  
```sh
$ sudo make install
```
