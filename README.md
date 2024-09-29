### Installation

To install the package, run the following command:

\```sh
npm install quill-v2-image-resize-module
\```

### Angular with SSR

install quill and ngx-quill packages then

In your component.html:

```html
<div #editor></div>
```

In your component.ts:

```typescript
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
          this.initializeEditor();
        }
    }

    @ViewChild('editor') editor!: ElementRef;
    editorQuill: any;

    async initializeEditor() {
        const Quill = (await import('quill')).default;
        (window as any).Quill = Quill;
        const ImageResize = (await import('quill-v2-image-resize-module')).default;
        Quill.register('modules/imgResize', ImageResize);
        this.editorQuill = new Quill(this.editor.nativeElement, {
        modules: this.editorModules,
        theme: 'snow',
        placeholder: 'type here...',
        });
    }
```

### Webpack/ES6

```javascript
import Quill from "quill";
import { ImageResize } from "quill-image-resize-module";

Quill.register("modules/imgResize", ImageResize);

const quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {
			// See optional "config" below
		},
	},
});
```

### Script Tag

Copy image-resize.min.js into your web root or include from node_modules

```html
<script src="/node_modules/quill-image-resize-module/image-resize.min.js"></script>
```

```javascript
var quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {
			// See optional "config" below
		},
	},
});
```

### Config

For the default experience, pass an empty object, like so:

```javascript
var quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {},
	},
});
```

Functionality is broken down into modules, which can be mixed and matched as you like. For example,
the default is to include all modules:

```javascript
const quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {
			modules: ["Resize", "DisplaySize", "Toolbar"],
		},
	},
});
```

Each module is described below.

#### `Resize` - Resize the image

Adds handles to the image's corners which can be dragged with the mouse to resize the image.

The look and feel can be controlled with options:

```javascript
var quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		ImageResize: {
			// ...
			handleStyles: {
				backgroundColor: "black",
				border: "none",
				color: white,
				// other camelCase styles for size display
			},
		},
	},
});
```

#### `DisplaySize` - Display pixel size

Shows the size of the image in pixels near the bottom right of the image.

The look and feel can be controlled with options:

```javascript
var quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {
			// ...
			displayStyles: {
				backgroundColor: "black",
				border: "none",
				color: white,
				// other camelCase styles for size display
			},
		},
	},
});
```

#### `Toolbar` - Image alignment tools

Displays a toolbar below the image, where the user can select an alignment for the image.

The look and feel can be controlled with options:

```javascript
var quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {
			// ...
			toolbarStyles: {
				backgroundColor: "black",
				border: "none",
				color: white,
				// other camelCase styles for size display
			},
			toolbarButtonStyles: {
				// ...
			},
			toolbarButtonSvgStyles: {
				// ...
			},
		},
	},
});
```

#### `BaseModule` - Include your own custom module

You can write your own module by extending the `BaseModule` class, and then including it in
the module setup.

For example,

```javascript
import { Resize, BaseModule } from "quill-image-resize-module";

class MyModule extends BaseModule {
	// See src/modules/BaseModule.js for documentation on the various lifecycle callbacks
}

var quill = new Quill(editor, {
	// ...
	modules: {
		// ...
		imgResize: {
			modules: [MyModule, Resize],
			// ...
		},
	},
});
```
