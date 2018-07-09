AFRAME.registerComponent('gearvr-height-fix', {
    dependencies: ['position'],
  
    init: function () {
      if (!AFRAME.utils.device.isGearVR()) { return; }
      var position = this.el.getComputedAttribute('position');
      position.y -= 1.6;
      this.el.setAttribute('position', position);
    }
  });

