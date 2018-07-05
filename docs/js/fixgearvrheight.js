AFRAME.registerComponent('gearvr-height-fix', {
    dependencies: ['position'],
  
    init: function () {
      if (!AFRAME.utils.isGearVR()) { return; }
      var position = this.el.getComputedAttribute('position');
      position.y += 0.3;
      this.el.setAttribute('position', position);
    }
  });