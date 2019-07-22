<template>
    <div class="graphic-report">
        <div class="graphic" :style="{height: graphicHeight}">
            graphic
        </div>
        <div class="data-table" :style="{height: ( tableHeight + 'px')}">
            
            <div class="toolbar"  @mousedown="downPoint($event)" @mousemove="moveLen($event)" @mouseup="upPoint($event)">
                <el-button title="添加"><i class="el-icon-circle-plus"></i></el-button>
                <el-button title="左移"><i class="el-icon-back"></i></el-button>
                <el-button title="右移"><i class="el-icon-right"></i></el-button>
                <!-- <button>{{moveLength}}</button> -->
            </div>
            
            <div class="table">
                <el-table
                    :data = "column" 
                    border
                    style="width: 100%"
                    size="mini"
                    height="100%"
                    highlight-current-row
                    @header-click="columnClick"
                    @row-click="rowClick"
                    >
                    <el-table-column v-for="(item, index) in tableHead" :key="index"
                        :fixed="index === 0 ? true : false"
                        :prop="index === 0 ? 'name' : 'value[' + index + ']'"
                        :label="item.channelMethod"
                        min-width="110"
                        column-key = "index"
                        align="center"
                        :resizable="false"
                        class="active"
                        >
                    </el-table-column>
                </el-table>
            </div> 

        </div>
    </div>
</template>
<script src="../vm/graphicreport.js"></script>
<style src="../css/graphicreport.scss" lang="scss" scoped></style>