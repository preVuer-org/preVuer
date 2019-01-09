# preVuer
**preVuer** is a *prototyping tool for Vue developers* to quickly create components from mock images from designers.

preVuer allows the developer to visually see how components will be layed out on a website. 
Once a mock image comes in from the designer, a developer can load the image on our application and start placing Vue components on areas of the webpage image. Afterwards, the developer can export the boxes as individual .vue files.

## Installation
*downloadable executable coming soon!*

As of now, to use our application on your local machine, please clone from this repo and run our start command:
```
git clone https://github.com/preVuer-org/preVuer
npm start
```

## How to use preVuer
Once preVuer has opened up, you'll see that it is split up into three sections. 

- **Left Section**: *adding, editing, deleting components*
  - To create a component, write in the title of your component and click the "**+**" button (or hit enter on your keyboard).
  - Once the component has been created, you'll notice that an item appears with the component name, a color box, select dropdown and a delete button appears. You'll also see a box appear in the middle section of the application. The item and box directly reflects the component you created! 
  - With each item/component, you can change the color the of box, select a parent or delete the component itself.
  - Finally, if you want to start over, you can use the "**Clear Workspace**" button to get rid of all components.

- **Middle Section**: *import image, move and resize Vue component box*
  - You can import your mock website image through the "**Import Image File**" button at the top. This will open up a dialog box, where you can select the image located in your local machine. To clear the image, use the "**Clear Image**" button.
  - The main section of the middle is where the Vue component boxes live. You can move and resize the boxes to fit your mock website image. 

- **Right Section**: *component tree, export files*
  - As you create components and have parent-child relationships on each component, they will be reflected in this section. An easy to understand tree will represent the heirarchy.
  - As you finish building out the components, you can export the files with the "**Export Components**" button. This will generate a folder and then fill it with all the components you used in prototyping. 

## Built with
- Vue
- Vuex
- Vue Material
- Konva/
- Electron
- Jest
- Webpack/Babel
