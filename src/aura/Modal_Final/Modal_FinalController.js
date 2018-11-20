/**
 * Created by jonbalza on 11/16/18.
 */
({
    handleIsOpenToggle: function(component, event, helper) {
        const isOpen = component.get('v.isOpen');
        const openDelay = component.get('v.openDelay');
        if (isOpen) {
            component.set('v.openState', 'opening');
            setTimeout($A.getCallback(function() {
                component.set('v.openState', 'open');
            }), 10);
        } else {
            component.set('v.openState', 'closing');
            setTimeout($A.getCallback(function() {
                component.set('v.openState', 'closed');
            }), openDelay);
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