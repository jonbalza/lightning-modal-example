# Lightning Component Modal Example
A quick demonstration of creating a Salesforce Lightning Component example for creating a modal that animates both on open and close.

## src/aura/Modal_Example
A quick demo to show the three different types of modals, and handle the `onclose` event that comes back in order to toggle the `isOpen` attribute of the modal. The `isOpen` attribute may be handled differently depending on your use-case.

## src/aura/Modal_Event
A component event used to pass back the `onclose` event to the parent component.

## src/aura/Modal_Basic
A simple show/hide based on the toggling of the `isOpen`, and removing the modal from the DOM directly on change of the attribute.
![Basic modal toggling](images/modal-basic.gif)

## src/aura/Modal_Animation
A modal that uses a quick `setTimeout()` function in order to add a class to the modal, which can assist in animation upon opening. Due to the reliance on the `isOpen` attribute, animation on close does not work.
![Modal toggling with animation upon opening](images/modal-animated.gif)

## src/aura/Modal_Final
A modal with that uses a different method in order to enable animation upon opening and closing a modal. `Modal_Final` relies a different method that uses the `isOpen` attribute indirectly to control the 4 stages of `openState`: `opening`, `open`, `closing`, and `closed`. `openState` is what then finally removes the HTML from the DOM upon closing.
![A lightning component modal with animation upon opening and closing of the modal](images/modal-final.gif)
