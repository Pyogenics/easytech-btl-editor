# World Conqueror 4 header format
```c
struct wc4Header
{
    uint32_t mapId; // assets/data/def_map.xml
    uint32_t mapX;
    uint32_t mapY;
    uint32_t mapWidth;
    uint32_t mapLength;
    uint32_t country;
    uint32_t building;
    uint32_t army;
    uint32_t action;
    uint32_t event;
    uint32_t weather;
    uint32_t victoryCondition;
    uint32_t minRound;
    uint32_t maxRound;
    uint32_t reinforcements;
    uint32_t airStrike[3];
    uint32_t capital[3];
    uint32_t area;
    uint32_t needMoney;
    uint32_t needGear;
    uint32_t needAtomic;
    uint64_t trap;
    uint32_t strategy[3];
    uint32_t airSupport;
}
```
