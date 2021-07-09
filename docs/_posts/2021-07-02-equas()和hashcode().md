# equals() 和 hashcode()

![pic](https://w.wallhaven.cc/full/dg/wallhaven-dgy7mg.jpg)

### 为什么重写equals()的时候也要重写hashcode()

**==** 比较内存地址，判断是否指向同一个对象

**hashcode()** 返回对象的内存地址

**equals()** Object默认通过 **==** 比较对象

如果引用对象要进行比较，需要重写 **equals()** 方法，以使值相同内存地址不同的对象返回True

``` Java
static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
```

HashMap 通过过hash值确定对象的存储位置，因此值相同的对象应返回相同的hash值。

因此，重写equals()的同时也要重写hashcode()