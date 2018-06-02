import { observable } from 'mobx';

export default class AppStore {
  @observable tools = [
    { name: 'egg' },
    { name: 'boom' },
    { name: 'kiss' },
  ];

  @observable showTools = false;
  @observable showPrompt = false;
  @observable currentTool = {
    name: '',
  };

  constructor() {
    const methods = [
      'toggleTools',
      'pickTool',
      'confirmUseTool',
    ]
    methods.forEach(method => {
      this[method] = this[method].bind(this);
    })
  }

  toggleTools() {
    this.showTools = !this.showTools;
  }

  pickTool(tool) {
    this.currentTool = tool;
    this.showPrompt = true;
  }

  confirmUseTool(confirm) {
    this.showPrompt = false;
    if (confirm) {
      this.showTools = false;
    }
  }
}