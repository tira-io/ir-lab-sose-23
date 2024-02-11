<template>
    <v-container class="text-center">
      <v-img class="mx-auto" height="300px" max-width="100%" width="300px" src="https://temir.org/img/index-cover-modified.png"/>
      <section>
        <h1 class="text-h3 text-sm-h3 py-4">
          IR Lab SoSe 2023 at Leipzig/Jena
        </h1>
        <p class="mx-auto py-4 tira-explanation">
          During the <a target="_blank" href="https://temir.org/teaching/information-retrieval-ss23/information-retrieval-ss23.html">IR lab in summer semester 2023</a> we did build domain-specific information retrieval systems for the <a href="https://ir.webis.de/" target="_blank">IR Anthology</a>. You can browse all the resulting systems and evaluations here.
        </p>
        <v-row class="d-flex justify-center py-4">
          <v-col cols="auto">
            <v-btn color="primary" href="https://temir.org/teaching/information-retrieval-ss23/information-retrieval-ss23.html" target="_blank"  min-width="228" rel="noopener noreferrer" size="x-large" variant="flat">
              <v-icon icon="mdi-speedometer" size="large" start/>
              Course
            </v-btn>
          </v-col>
          <v-col cols="auto text-primary">
            <v-btn href="https://www.tira.io/task-overview/ir-lab-jena-leipzig-sose-2023" target="_blank"  min-width="228"  rel="noopener noreferrer" size="x-large" variant="outlined">
              <v-icon size="large" start>
                <v-img src="https://www.tira.io/public/tira/frontend-vuetify/assets-public/logo.svg" />
              </v-icon>
              TIRA
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn class="home-button" href="https://github.com/tira-io/ir-lab-sose-23" target="_blank" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat">
              <v-icon icon="mdi-github" size="large" start/>
              GitHub
            </v-btn>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </template>
  
  <style scoped>
    .tira-explanation {
      font-size: 1.25rem;
      font-weight: 300;
      max-width: 525px;
    }
    .home-button {
      color: #fff;
      background: #000;
    }
    .home-button:hover {
      color: #fff;
      background: #000;
    }
    .home-button:visited {
      color: #fff;
      background: #000;
    }
  </style>