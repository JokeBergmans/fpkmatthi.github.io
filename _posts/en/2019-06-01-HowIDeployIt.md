---
layout: post
title: "How I deploy my portfolio"
subtitle: ""
date: 2019-05-01
categories: deployment
lang: en
i18n-link: deployment
---

# How I deploy my portfolio
My portfolio/blog started out as an assignment for the course i1Talent. The first generation was a from-scratch website, hosted on [Digital Ocean](https://m.do.co/c/f19502fb910e) and made using HTML, CSS, Bootstrap and some ES6. Maintaining this is doable but since it can be done a lot easier, why not do it easier?

Firstly, I switched to [Github Pages](https://pages.github.com/), which is costless but keep in mind that it's only for static websites. A VPS is much more suitable if you wish to host a dynamic website. Github Pages is where I discoverd [Jekyll](https://jekyllrb.com/). Jekyll is a Ruby Gem that requires a **full Ruby development environment**. I used Ubuntu but more guides for other operating systems can be found [here](https://jekyllrb.com/docs/installation/)

<pre>
<code class="border rounded border-dark">
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler

</code>
</pre>

To start a new site

<pre>
<code class="border rounded border-dark">
jekyll new myblog
cd myblog
bundle exec jekyll serve

</code>
</pre>

The output of the last command will tell you where the website is hosted locally. Usually this is **http://localhost:4000/**.  

I watched some [YouTube tutorials](https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB) and dove into the [Jekyll](https://jekyllrb.com/docs/) and [Liquid](https://shopify.github.io/liquid/) Documentation.
Also the [vim-jekyll](https://github.com/parkr/vim-jekyll) plugin is something that might come in handy.

You can use existing templates where some are even hosted by Github which makes the whole proces even simpler. I chose not to and adapt my existing layout to be used as a template for Jekyll.

There is however a small drawback, Github only allows [a certain set of plugins and dependancies](https://pages.github.com/versions/). If you want to make use of a plugin that is not hosted, you can use the method I'm about to explain in the next section.

## Using Continuous Integration to ease your pain

If you want to avoid the restrictions mentioned above, you can push only the **site/** directory to github. This directory contains all the generated files after compiling everything locally. This is however a bit tedious and I would rather have both my build files and my project files on Github.  

You'll want to create an extra branch so you start with 2 branches, one for the build files and one for the project files. Make sure the master branch is used for the build files. On Github, change your default branch to the one containing your project files.
![Imgur](/assets/images/branchsettings.png){:class="container"}

Instead of having to compile it yourself, you can let a build server do all the work for you. In went with Travis CI since a Github pages is open and Travis CI is free for open source porjects.

To set up Travis CI, you will need a Github Personal Access Token and grant it the repo scope.
Copy the token, you will need it later.
Add rake to you Gemfile. This is my Gemfile as an example:

<pre>
<code class="border rounded border-dark">
source "https://rubygems.org"
ruby RUBY_VERSION

gem "rake", "~> 12"
gem "jekyll"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-paginate-multiple", "~> 0.1.0"
end

</code>
</pre>

You will want to exlude some files that are not supposed to end up in the branch of your build files, add this to your **_config.yml**

<pre>
<code class="border rounded border-dark">
exclude:
  - vendor
  - Gemfile
  - Gemfile.lock
  - LICENSE
  - README.md
  - Rakefile

</code>
</pre>

Next, you will need a **.travis.yml** file for the configuration of Travis CI, this is mine as an example:

<pre>
<code class="border rounded border-dark">
language: ruby
rvm:
- 2.3.1
install:
- bundle install
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  local_dir: _site
  target_branch: master
  on:
    branch: develop

</code>
</pre>

The last file you will need to create is a Rakefile, which tells Travis what to do. Again mine as an example:

<pre>
<code class="border rounded border-dark">
task :default do
  puts "Running CI tasks..."
  sh("JEKYLL_ENV=production bundle exec jekyll build")
  puts "Jekyll successfully built"
end

</code>
</pre>

On the dashboard of Travis CI, enable your repo and go to its settings.
Make a new Environment Variable called **GITHUB_TOKEN** and paste the Personal Access Token you copied earlier.

## Conclusion

You can now keep working in one branch without having to recompile it yourself and push it to master, each time you want publish your changes. Travis will automatically build all the files and push them on master
![Imgur](/assets/images/buildsuccess.png){:class="container"}
