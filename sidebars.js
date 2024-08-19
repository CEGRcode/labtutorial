/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  generalBenchSidebar: [{type: 'autogenerated', dirName: 'General'}],

  softwareSidebar: [{type: 'autogenerated', dirName: 'Software'}],

  wetBenchSidebar: [{type: 'autogenerated', dirName: 'WetBench'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = {
  "docs": {
    "Software": [
      "Software/backend-deployment",
      "Software/cac",
      "Software/condatutorial",
      "Software/faq",
      "Software/frontend-dev",
      "Software/galaxy",
      "Software/labwebsite",
      "Software/pegr",
      "Software/planemo",
      "Software/publication-checklist",

      {"Tutorials": [
      "Software/peakcalling-tutorial"
      ]
    }
    ]
    }
}
