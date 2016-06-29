## Site
Rewrite Site using `Angular`+`Angular Material`  

[![Build Status](https://travis-ci.org/Aquariuslt/Site.png)](https://travis-ci.org/Aquariuslt/Site)  

## Background
When I was young,I choose `WordPress` as a blog platform.  
But I have no ability to deep customize the styles about `WordPress` themes  
and hate to read php code.

So I change to `Hexo`.
Hexo is a good static blog,and my tech blog was deploy on 

## Getting Start


## Features
### Tags
Your articles are allow to group by tags.  
Please add your tags metadata as json array format like below:  

```
{
  "title": "关于document.createElement的图片加载问题",
  "date": "2016-04-02 17:14:39",
  "tags":["JavaScript"] //<--use javascript string array as your tags
}
```

### Disqus Support
Now it support disqus for comment management.
Detail configuration see [Disqus Config]()

### Online Markdown Editor
There is a small features for online writing article using markdown.  
You can use [Public Online Markdown Editor](http://aquariuslt.com/#!/markdown-editor)  
or project own markdown editor `/#!/markdown-editor`.  

It currently support 3 little features from standard markdown compile options:  
![Markdown Compile Options](https://img.alicdn.com/tfscom/TB1L7ftKFXXXXbJXFXXXXXXXXXX.png)

#### Non-Strict Mode
When the first time using markdown,I hate the two-space after each line in content.  
Not can ignore this symbols after clicking the options `Non Strict Mode`.

#### TOC
Support `Table of Content` feature from the mostly popular markdown editor.  
Insert `[TOC]` in content,it will insert and replace the tag as table of content.    

![Table of Content](https://img.alicdn.com/tfscom/TB1mf_DKFXXXXcVXXXXXXXXXXXX.png)

#### Hexo Header
...





## Fork and Customize
### Site Config
The whole `site-config` file is located in `${project}\tasks\config\siteConfig`.
In current version a site-config file:  

```js
module.exports = {
	siteName:'Aquariuslt Home',
	subSiteLinks:[
		{
			name: 'Blog',
			link: 'http://blog.aquariuslt.com',
			description: 'Tech Blog'
		},
		{
			name: 'Debug',
			link: 'http://debug.aquariuslt.com',
			description: 'Debug Log'
		},
		{
			name: 'Game',
			link: 'http://game.aquariuslt.com',
			description: 'WoW Daily'
		}
	],
	
	friendLinks:[
		{
			name: 'wxsm blog',
			link: 'http://anubarak.com',
			description: 'Kary Gor博客,前端大神'
		},
		{
			name: 'lousama',
			link: 'http://lousama.com',
			description: '为女人拒绝阿里的楼总'
		},
		{
			name: 'NotFound404',
			link: 'https://github.com/404NoFound',
			description: '良哥的Github'
		}
	],
	
	disqusShortName:'althome'
};

```
#### Site Name
Variable `siteName` impact the website default title,header title,and side navbar title.

When page state change,the `siteName` is always append at the end of current page title.  
For example:
> when enter to a post detail,the html title was change from `siteName` to `postTitle`+`siteName`.  
> when enter to a tag page,the html title was change from `before page title` to `tags contains`+`tagTitle`+`siteName`.

#### Disqus Config
Disqus is the most standard,popular,biggerlity community plugin for you website.  
Please register disqus and apply a disqus shortname for your website before.  
[https://disqus.com/](https://disqus.com/)  


After register a shortname for your site.
Fill it into field:`disqusShortName`.  

You can find your disqus shortname in below:  
![Disqus ShortName Settings](https://img.alicdn.com/tfscom/TB1BenBKFXXXXatXpXXXXXXXXXX.png)


#### SubSites and FriendLinks
As social friend links and your sub websites, you can add its link like below format:  
```js
	friendLinks:[
		{
			name: 'wxsm blog',
			link: 'http://anubarak.com',
			description: 'Kary Gor博客,前端大神'
		},
		{
			name: 'NotFound404',
			link: 'https://github.com/404NoFound',
			description: '良哥的Github'
		}
	]
```

