/**
 * Created by jonbalza on 11/16/18.
 */
({
    openBasicModal: function(component, event, helper) {
        component.set("v.isBasicModalOpen", true);
    },
    closeBasicModal: function(component, event, helper) {
        component.set("v.isBasicModalOpen", false);
    },

    openAnimatedModal: function(component, event, helper) {
        component.set("v.isAnimatedModalOpen", true);
    },
    closeAnimatedModal: function(component, event, helper) {
        component.set("v.isAnimatedModalOpen", false);
    },

    openFinalModal: function(component, event, helper) {
        component.set("v.isFinalModalOpen", true);
    },
    closeFinalModal: function(component, event, helper) {
        component.set("v.isFinalModalOpen", false);
    }
})