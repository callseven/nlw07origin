      const LinksSocialMedia = {
        github: 'callseven',
        youtube: 'jakelinygracielly',
        facebook: 'maykbrito',
        instagram: 'jakeliny.gracielly',
        twitter: 'jakelinytec'
      }

      function changeSocialMediaLinks() {
        for (let li of socialLinks.children) {
          const social = li.getAttribute('class')

          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

          // alert(li.children[0].href)
        }
      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos() {
        const url = `https://api.github.com/users/${LinksSocialMedia.github}`
          
        fetch(url)
        .then(response => response.json())
        .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        // userLink.textContent = data.login
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
        })
    }

getGitHubProfileInfos()


      // i = i + 1
      // i++

      // ser humano 12345678910
      //computador 0123456789
      
      //ARROW FUNCTION
      function name(params) {
          //code
      }
      params => {} // recebendo um parametro (argumento) ou 
      (param1, param2) => {} //ou (recebendo mais de um argumento)
      () => {} // funcao sem receber nada