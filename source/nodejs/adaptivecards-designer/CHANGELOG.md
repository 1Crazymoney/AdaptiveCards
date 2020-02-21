## Version 0.8
- Updated selection visuals, with subtle animation to produce a smoother effect
- Slightly updates visuals in the **Element Properties** toolbox
- New Sample Picker dialog with previews
- The "Full screen" toolbar button has been **REMOVED** along with its Id definition. Applications that explicitly manipulate this button (by hiding it for example) will need to be updated.
- The **Open sample**"** toolbar button has been **REMOVED** along with its Id definition. The **New card** button now combines the functionality previsouly implemented by Open sample. Applications that explicitly manipulate this button (by hiding it for example) will need to be updated.
- The **Data Structure** toolbox is now hidden by default, and is basically non functional. It can still be shown by setting `GlobalSettings.showDataStructureToolbox` to `true`, but it will likely be completely removed in a future update.
- New data binding experience:
    - When a `TextBlock` is selected, a new **Bind...** button appears that makes it easy to pick a data field to bind the `text` property of the TextBlock to.
    - The same goes for the `Image.url`
    - In additiona to this design surface button, new buttons have been added in the **Element Properties** toolbox to easily bind data fields to a select set of properties (including the `$when` property)
- The type of the `designerInstance.dataStructure` property has been enhanced to include a `sampleValue` field which can be used to generate data binding previews (see below)
- Instant data binding preview:
    - `TextBlock` and `Image` elements bound to data fields will now always display a preview of the field, rather than the binding expression
    - Applications can control this behavior by setting `designerInstance.bindingPreviewMode` to either:
        - `NoPreview`: In this mode, bindings are displayed as expressions (e.g. {$root.myField}) as they used to
        - `GeneratedData`: In this mode, bindings are displayed as previews generated from the `sampleValue` of the defined `dataStructure`
        - `SampleData`: In this mode, bindings are displayed as previews using the proveided sample data payload
- To make it more discoverable, the design surface button to add an action to `AdaptiveCard` and `ActionSet` now explicitly reads "Add an action" instead of being just an icon
- Version picker
    - A new **Target version** picker has been added to the toolbar, allowing the user to pick the target Adaptive Card schema version they want to author their card against
    - A `designerInstance.targetVersion` property has been added to programmatically set the target version. This allows applications to hide the version picker and lock the designer into a specific target Adaptive Card schema version
    - According to the selected target version, the designer will:
        - Only show the properties available in that version in the **Element Properties** toolbox
        - Only propose elements that are available in that version in the **Card Elements** toolbox
        - Only propose actions that are available in that version in the **Add an action** menu
        - Show parse and validation errors helping the end user understand what aspects of a card are not compatible with the selected version. This includes unavailable elements and actions, enumeration values, container styles, and more
- The `HostContainer` class now have a `targetVersion` property
    - When the selected `HostContainer` changes, its target version is automatically selected in the version picker. This behavior can be disabled by setting `GlobalsSettings.selectedHostContainerControlsTargetVersion` to `false`
    - If a target version that is greater than that supported by the current `HostContainer` is selected, a **Warning** message is displayed to let the user know they might be using Adaptive Card capabilities that are not compatible with the target host application. This behavior can be disabled by setting `GlobalSettings.showTargetVersionMismatchWarning` to `false`.