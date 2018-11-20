/**
 * Created by jonbalza on 11/16/18.
 */
({
    handleIsOpenToggle: function(component, event, helper) {
        const isOpen = component.get("v.isOpen");
        if (isOpen) {
            setTimeout($A.getCallback(function() {
                component.set("v.openClass", 'is-open');
            }), 10);
        } else {
            setTimeout($A.getCallback(function() {
                component.set("v.openClass", '');
            }), 10);
        }
    },

    closeModal: function(component, event, helper) {
        let closeEvent = component.getEvent('onclose');
        closeEvent.setParams({
            type: 'close'
        });
        closeEvent.fire();
    }
})