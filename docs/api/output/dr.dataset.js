Ext.data.JsonP.dr_dataset({"tagname":"class","name":"dr.dataset","autodetected":{},"files":[{"filename":"classdocs.js","href":"classdocs.html#dr-dataset"}],"extends":"dr.node","members":[{"name":"async","tagname":"attribute","owner":"dr.dataset","id":"attribute-async","meta":{}},{"name":"data","tagname":"attribute","owner":"dr.dataset","id":"attribute-data","meta":{"readonly":true}},{"name":"id","tagname":"attribute","owner":"dr.node","id":"attribute-id","meta":{}},{"name":"inited","tagname":"attribute","owner":"dr.node","id":"attribute-inited","meta":{"readonly":true}},{"name":"name","tagname":"attribute","owner":"dr.dataset","id":"attribute-name","meta":{"required":true}},{"name":"scriptincludes","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludes","meta":{}},{"name":"scriptincludeserror","tagname":"attribute","owner":"dr.node","id":"attribute-scriptincludeserror","meta":{}},{"name":"subnodes","tagname":"attribute","owner":"dr.node","id":"attribute-subnodes","meta":{"readonly":true}},{"name":"url","tagname":"attribute","owner":"dr.dataset","id":"attribute-url","meta":{}},{"name":"animate","tagname":"method","owner":"dr.node","id":"method-animate","meta":{"chainable":true}},{"name":"createChild","tagname":"method","owner":"dr.node","id":"method-createChild","meta":{}},{"name":"defaultSetAttributeBehavior","tagname":"method","owner":"Eventable","id":"method-defaultSetAttributeBehavior","meta":{}},{"name":"destroy","tagname":"method","owner":"dr.node","id":"method-destroy","meta":{}},{"name":"doSubnodeAdded","tagname":"method","owner":"dr.node","id":"method-doSubnodeAdded","meta":{"private":true}},{"name":"doSubnodeRemoved","tagname":"method","owner":"dr.node","id":"method-doSubnodeRemoved","meta":{"private":true}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAndFire","tagname":"method","owner":"Eventable","id":"method-setAndFire","meta":{}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"setAttributes","tagname":"method","owner":"Eventable","id":"method-setAttributes","meta":{"chainable":true}},{"name":"ondestroy","tagname":"event","owner":"dr.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"dr.node","id":"event-oninit","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.dataset","short_doc":"Datasets hold onto a set of JSON data, either inline or loaded from a URL. ...","component":false,"superclasses":["Module","Eventable","dr.node"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/dr.node' rel='dr.node' class='docClass'>dr.node</a><div class='subclass '><strong>dr.dataset</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/classdocs.html#dr-dataset' target='_blank'>classdocs.js</a></div></pre><div class='doc-contents'><p>Datasets hold onto a set of JSON data, either inline or loaded from a URL.\nThey are used with lz.replicator for data binding.</p>\n\n<p>This example shows how to create a dataset with inline JSON data, and use a replicator to show values inside. Inline datasets are useful for prototyping, especially when your backend server isn't ready yet:</p>\n\n<pre class='inline-example wide'><code>&lt;dataset name=\"example\"&gt;\n {\n   \"store\": {\n     \"book\": [\n       {\n         \"category\": \"reference\",\n         \"author\": \"Nigel Rees\",\n         \"title\": \"Sayings of the Century\",\n         \"price\": 8.95\n       },\n       {\n         \"category\": \"fiction\",\n         \"author\": \"Evelyn Waugh\",\n         \"title\": \"Sword of Honour\",\n         \"price\": 12.99\n       },\n       {\n         \"category\": \"fiction\",\n         \"author\": \"Herman Melville\",\n         \"title\": \"Moby Dick\",\n         \"isbn\": \"0-553-21311-3\",\n         \"price\": 8.99\n       },\n       {\n         \"category\": \"fiction\",\n         \"author\": \"J. R. R. Tolkien\",\n         \"title\": \"The Lord of the Rings\",\n         \"isbn\": \"0-395-19395-8\",\n         \"price\": 22.99\n       }\n     ],\n     \"bicycle\": {\n       \"color\": \"red\",\n       \"price\": 19.95\n     }\n   }\n }\n&lt;/dataset&gt;\n&lt;spacedlayout&gt;&lt;/spacedlayout&gt;\n&lt;replicator classname=\"text\" datapath=\"$example/store/book[*]/title\"&gt;&lt;/replicator&gt;\n</code></pre>\n\n<p>Data can be loaded from a URL when your backend server is ready, or reloaded to show changes over time:</p>\n\n<pre class='inline-example wide'><code>&lt;dataset name=\"example\" url=\"/examples/data/example.json\"&gt;&lt;/dataset&gt;\n&lt;spacedlayout&gt;&lt;/spacedlayout&gt;\n&lt;replicator classname=\"text\" datapath=\"$example/store/book[*]/title\"&gt;&lt;/replicator&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required attributes</h3><div id='attribute-name' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.dataset'>dr.dataset</span><br/><a href='source/classdocs.html#dr-dataset-attribute-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.dataset-attribute-name' class='name expandable'>name</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The name of the dataset</p>\n</div><div class='long'><p>The name of the dataset</p>\n<p>Overrides: <a href=\"#!/api/dr.node-attribute-name\" rel=\"dr.node-attribute-name\" class=\"docClass\">dr.node.name</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional attributes</h3><div id='attribute-async' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.dataset'>dr.dataset</span><br/><a href='source/classdocs.html#dr-dataset-attribute-async' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.dataset-attribute-async' class='name expandable'>async</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, parse json in a worker thread ...</div><div class='long'><p>If true, parse json in a worker thread</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.dataset'>dr.dataset</span><br/><a href='source/classdocs.html#dr-dataset-attribute-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.dataset-attribute-data' class='name expandable'>data</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The data inside the dataset</p>\n</div><div class='long'><p>The data inside the dataset</p>\n</div></div></div><div id='attribute-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='attribute-inited' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='attribute-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='attribute-scriptincludeserror' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-scriptincludeserror' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-scriptincludeserror' class='name expandable'>scriptincludeserror</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An error to show if scriptincludes fail to load</p>\n</div><div class='long'><p>An error to show if scriptincludes fail to load</p>\n</div></div></div><div id='attribute-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-attribute-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-attribute-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of this node's child nodes</p>\n</div><div class='long'><p>An array of this node's child nodes</p>\n</div></div></div><div id='attribute-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.dataset'>dr.dataset</span><br/><a href='source/classdocs.html#dr-dataset-attribute-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.dataset-attribute-url' class='name expandable'>url</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The url to load JSON data from.</p>\n</div><div class='long'><p>The url to load JSON data from.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-animate' class='name expandable'>animate</a>( <span class='pre'>obj, Number</span> ) : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Animates this node's attribute(s) ...</div><div class='long'><p>Animates this node's attribute(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>A hash of attribute names and values to animate to</p>\n</div></li><li><span class='pre'>Number</span> : Object<div class='sub-desc'><p>duration The duration of the animation in milliseconds</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-createChild' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-createChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-createChild' class='name expandable'>createChild</a>( <span class='pre'>Object</span> ) : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Used to create child instances on a node. ...</div><div class='long'><p>Used to create child instances on a node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Object</span> : Object<div class='sub-desc'><p>options Should include a class attribute: 'class', e.g. {class: 'view'} unless a <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> is desired.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-defaultSetAttributeBehavior' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-defaultSetAttributeBehavior' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-defaultSetAttributeBehavior' class='name expandable'>defaultSetAttributeBehavior</a>( <span class='pre'>name, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The default behavior to execute in setAttribute once setters have been\nrun. ...</div><div class='long'><p>The default behavior to execute in setAttribute once setters have been\nrun. Stores the value on this object and fires an event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-doSubnodeAdded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeAdded' class='name expandable'>doSubnodeAdded</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when a subnode is added to this node. ...</div><div class='long'><p>Called when a subnode is added to this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to add a subnode. Instead call setParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was added.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doSubnodeRemoved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-method-doSubnodeRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-method-doSubnodeRemoved' class='name expandable'>doSubnodeRemoved</a>( <span class='pre'>node</span> ) : void<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when a subnode is removed from this node. ...</div><div class='long'><p>Called when a subnode is removed from this node. Provides a hook for\nsubclasses. No need for subclasses to call super. Do not call this\nmethod to remove a subnode. Instead call _removeFromParent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The subnode that was removed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAndFire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAndFire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAndFire' class='name expandable'>setAndFire</a>( <span class='pre'>name, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stores the value on this object and fires an event. ...</div><div class='long'><p>Stores the value on this object and fires an event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute on this object, calls a setter function if it exists. ...</div><div class='long'><p>Sets an attribute on this object, calls a setter function if it exists.\nAlso stores the attribute in a property on the object and sends an event\nwith the new value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttributes' class='name expandable'>setAttributes</a>( <span class='pre'>attributes</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Calls setAttribute for each name/value pair in the attributes object ...</div><div class='long'><p>Calls setAttribute for each name/value pair in the attributes object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>An object of name/value pairs to be set</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ondestroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.node' rel='dr.node' class='defined-in docClass'>dr.node</a><br/><a href='source/layout.html#dr-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});