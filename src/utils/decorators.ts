export function Log(ar1: unknown) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
      console.log(target);

      let result;
      try {
        result = await originalMethod.apply(this, args);
      } catch (e) {
        result = e;
      }

      console.log(`${key} returned: ${JSON.stringify(result)}`);
      return result;
    };

    return descriptor;
  };
}
