// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "behavior",
  id: "mikal_rotate_shape",
  name: "Rotate 3D",
  version: "1.11.0",
  category: "movements",
  author: "mikal",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "Visual 3D rotation of objects",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  // addonUrl: "https://www.construct.net/en/make-games/addons/####/XXXX", // displayed in auto-generated docs
  // githubUrl: "https://github.com/skymen/XXXX", // displays latest release version in auto-generated docs
  fileDependencies: [],
  info: {
    Set: {
      IsOnlyOneAllowed: false,
      CanBeBundled: false,
      IsDeprecated: false,
    },
  },
  properties: [
    {
      name: "Angle X",
      desc: "X axis angle",
      type: "float",
      id: "angle-x",
      options: {
        initialValue: 0,
      },
    },
    {
      name: "Angle Y",
      desc: "Y axis angle",
      type: "float",
      id: "angle-y",
      options: {
        initialValue: 0,
      },
    },
    {
      name: "Angle Z",
      desc: "Z axis angle",
      type: "float",
      id: "angle-z",
      options: {
        initialValue: 0,
      },
    },
    {
      name: "Offset X",
      desc: "X center offset",
      type: "float",
      id: "offset-x",
      options: {
        initialValue: 0,
      },
    },
    {
      name: "Offset Y",
      desc: "Y center offset",
      type: "float",
      id: "offset-y",
      options: {
        initialValue: 0,
      },
    },
    {
      name: "Offset Z",
      desc: "Z center offset",
      type: "float",
      id: "offset-z",
      options: {
        initialValue: 0,
      },
    },
    {
      name: "Scale X",
      desc: "X scale",
      type: "float",
      id: "scale-x",
      options: {
        initialValue: 1,
      },
    },
    {
      name: "Scale Y",
      desc: "Y scale",
      type: "float",
      id: "scale-y",
      options: {
        initialValue: 1,
      },
    },
    {
      name: "Scale Z",
      desc: "Z scale",
      type: "float",
      id: "scale-z",
      options: {
        initialValue: 1,
      },
    },
  ],
  aceCategories: {
    general: "General",
  },
  Acts: {
    SetRotationAngles: {
      // The category of the action as it appears in the add action dialog
      category: "general",
      forward: "_SetRotationAngles",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "angle-x",
          name: "Angle x",
          desc: "X axis angle",
          type: "number",
          value: 0,
        },
        {
          id: "angle-y",
          name: "Angle y",
          desc: "Y axis angle",
          type: "number",
          value: 0,
        },
        {
          id: "angle-z",
          name: "Angle z",
          desc: "Z axis angle",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set rotation angles",
      displayText: "{my}: Set rotation angles [i]{0}, {1}, {2}[/i]",
      description: "Set rotation angles",
    },
    // Create a new action for Setting Rotation angles X, Y only
    SetRotationAnglesXY: {
      // The category of the action as it appears in the add action dialog
      category: "general",
      forward: "_SetRotationAnglesXY",
      autoScriptInterface: true,
      highlight: true,
      deprecated: true,
      isAsync: false,
      params: [
        {
          id: "angle-x",
          name: "Angle x",
          desc: "X axis angle",
          type: "number",
          value: 0,
        },
        {
          id: "angle-y",
          name: "Angle y",
          desc: "Y axis angle",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set rotation angles XY",
      displayText: "{my}: Set rotation angles XY [i]{0}, {1}[/i]",
      description: "Set rotation angles XY",
    },
    // Create a new action for Setting Center Offset
    SetCenterOffset: {
      // The category of the action as it appears in the add action dialog
      category: "general",
      forward: "_SetCenterOffset",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "offset-x",
          name: "Offset x",
          desc: "X center offset",
          type: "number",
          value: 0,
        },
        {
          id: "offset-y",
          name: "Offset y",
          desc: "Y center offset",
          type: "number",
          value: 0,
        },
        {
          id: "offset-z",
          name: "Offset z",
          desc: "Z center offset",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set center offset",
      displayText: "{my}: Set center offset [i]{0}, {1}, {2}[/i]",
      description: "Set center offset",
    },
    // Create a new action set x,y,z scaling
    SetScale: {
      // The category of the action as it appears in the add action dialog
      category: "general",
      forward: "_SetScale",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "scale-x",
          name: "Scale x",
          desc: "X scale",
          type: "number",
          value: 1,
        },
        {
          id: "scale-y",
          name: "Scale y",
          desc: "Y scale",
          type: "number",
          value: 1,
        },
        {
          id: "scale-z",
          name: "Scale z",
          desc: "Z scale",
          type: "number",
          value: 1,
        },
      ],
      listName: "Set scale",
      displayText: "{my}: Set scale [i]{0}, {1}, {2}[/i]",
      description: "Set scale",
    },
    RotateTowardsPosition: {
      // The category of the action as it appears in the add action dialog
      category: "general",
      forward: "_RotateTowardsPosition",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "x",
          name: "X",
          desc: "X position",
          type: "number",
          value: 0,
        },
        {
          id: "y",
          name: "Y",
          desc: "Y position",
          type: "number",
          value: 0,
        },
        {
          id: "z",
          name: "Z",
          desc: "Z position",
          type: "number",
          value: 0,
        },
        // obj angle
        {
          id: "angle-x",
          name: "Object Angle X",
          desc: "Object X axis angle (YXZ order)",
          type: "number",
          value: 0,
        },
        {
          id: "angle-y",
          name: "Object Angle Y",
          desc: "Object Y axis angle (YXZ order)",
          type: "number",
          value: 0,
        },
        {
          id: "angle-z",
          name: "Object Angle Z",
          desc: "Object Z axis angle (YXZ order)",
          type: "number",
          value: 0,
        },
        // up vector
        {
          id: "up-x",
          name: "Up X",
          desc: "Up X",
          type: "number",
          value: 0,
        },
        {
          id: "up-y",
          name: "Up Y",
          desc: "Up Y",
          type: "number",
          value: 0,
        },
        {
          id: "up-z",
          name: "Up Z",
          desc: "Up Z",
          type: "number",
          value: 1,
        },
      ],
      listName: "Rotate towards position",
      displayText:
        "{my}: Rotate towards position [i]{0}, {1}, {2}[/i], object angle [i]{3}, {4}, {5}[/i] up: [i]{6}, {7}, {8}[/i]",
      description: "Rotate towards position",
    },
    EnableFragLight: {
      // The category of the action as it appears in the add action dialog
      category: "general",
      forward: "_EnableFragLight",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "enable",
          name: "Enable",
          desc: "Enable fragment lighting",
          type: "boolean",
          value: true,
        },
      ],
      listName: "Enable fragment lighting",
      displayText: "{my}: Enable fragment lighting [i]{0}[/i]",
      description: "Enable fragment lighting",
    },
  },
  Cnds: {},
  Exps: {
    AngleX: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_AngleX",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the X world axis angle",
    },
    AngleY: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_AngleY",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the Y world axis angle",
    },
    AngleZ: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_AngleZ",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the Z world axis angle",
    },
    OffsetX: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_OffsetX",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the X center offset",
    },
    OffsetY: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_OffsetY",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the Y center offset",
    },
    OffsetZ: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_OffsetZ",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the Z center offset",
    },
    // Add expressions for getting x,y,z scaling
    ScaleX: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_ScaleX",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the X scale",
    },
    ScaleY: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_ScaleY",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the Y scale",
    },
    ScaleZ: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_ScaleZ",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [],
      description: "Get the Z scale",
    },
    Quaternion: {
      // The category of the action as it appears in the expression picker
      category: "general",
      forward: "_Quaternion",
      autoScriptInterface: true,
      highlight: true,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      description: "Get the quaternion as JSON string",
    },
  },
};
