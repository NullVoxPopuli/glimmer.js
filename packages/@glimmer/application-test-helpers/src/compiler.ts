import { precompile as glimmerPrecompile, PrecompileOptions } from '@glimmer/compiler';
import { SerializedTemplateWithLazyBlock } from '@glimmer/interfaces';

// Rather than duplicating the TemplateMeta definition from @glimmer/component,
// which is not a dependency, let's be more permissive for this test helper.
export type TemplateMeta = any;

export function precompile(
  template: string,
  options: PrecompileOptions
): SerializedTemplateWithLazyBlock<TemplateMeta> {
  return JSON.parse(glimmerPrecompile(template, options));
}
