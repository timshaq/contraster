function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && !item.nodeType);
}
function extendDefaults(source, props) {
    if (!isObject(source) || !isObject(props)) {
        return props;
    }
    Object.keys(props).forEach(key => {
        const sourceValue = source[key];
        const propsValue = props[key];

        if (Array.isArray(sourceValue) && Array.isArray(propsValue)) {
            source[key] = sourceValue.concat(propsValue);
        } else if (isObject(sourceValue) && isObject(propsValue)) {
            source[key] = extendDefaults(Object.assign({}, sourceValue), propsValue);
        } else {
            source[key] = propsValue;
        }
    });
    return source;
}

export default extendDefaults;