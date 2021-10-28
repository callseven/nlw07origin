      const LinksSocialMedia = {
        github: 'jakeliny',
        youtube: 'jakelinygracielly',
        facebook: 'maykbrito',
        instagram: 'jakeliny.gracielly',
        twitter: 'jakelinytec'
      }

      function changeSocialMediaLinks() {
        for (let li of socialLinks.children) {
          const social = li.getAttribute('class')

          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

          alert(li.children[0].href)
        }
      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos() {
          const url = `https://api.github.com/users/${LinksSocialMedia.github}`
          
          fetch(url).then(response => )
      
        .then(response => response.json())
        .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        UserImage.src = data.avatar_url
        userLogin.textContent = data.login
        })
    }

getGitHubProfileInfos()


      // i = i + 1
      // i++

      // ser humano 12345678910
      //computador 0123456789
