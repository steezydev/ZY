import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import myStructure from './deskStructure'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'dimgray-mandrill',

  projectId: 'mms5pgm8',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

