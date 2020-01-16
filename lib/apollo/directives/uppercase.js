const { SchemaDirectiveVisitor } = require('apollo-server-koa')
const { defaultFieldResolver } = require('graphql')

/**
 * UpperCase Directive
 * transform string based fields to upper case.
 */
class UpperCaseDirective extends SchemaDirectiveVisitor {
  /**
   * Implementation @UpperCase can be used only on a field definition.
   * @param {GraphQLField} field .
   */
  visitFieldDefinition (field) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async function resolver (...args) {
      const result = await resolve.apply(this, args)
      if (typeof result === 'string') {
        return result.toUpperCase()
      }
      return result
    }
  }
}

module.exports = UpperCaseDirective
