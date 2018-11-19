/**
 * Created by jonbalza on 11/16/18.
 */
({
    closeModal: function(component, event, helper) {
        let closeEvent = component.getEvent('onclose');
        closeEvent.setParams({
            type: 'close'
        });
        closeEvent.fire();
    }
})