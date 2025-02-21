import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

const GlassmorphismUI = () => {
  const [products] = useState([
    { id: 1, name: '有機蔬菜箱', price: 599, description: '當季新鮮有機蔬菜組合' },
    { id: 2, name: '進口水果禮盒', price: 899, description: '精選進口水果組合' },
    { id: 3, name: '手工餅乾組', price: 299, description: '純手工製作餅乾組合' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100/50 to-amber-100/50 p-8">
      {/* 背景裝飾 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* 導航欄 */}
      <nav className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 mb-8 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-rose-800">公司團購網</h1>
          <Button className="bg-white/20 backdrop-blur-lg border border-white/30 text-rose-800 hover:bg-white/30 transition-all duration-300">
            <ShoppingCart className="w-5 h-5 mr-2" />
            購物車
          </Button>
        </div>
      </nav>

      {/* 商品列表 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-rose-800">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-rose-700/80 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-rose-800 mb-4">NT$ {product.price}</p>
              <div className="flex justify-between items-center">
                <Button className="bg-white/20 backdrop-blur-lg border border-white/30 text-rose-800 hover:bg-white/30">
                  <Plus className="w-4 h-4" />
                  加入購物車
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" className="border-rose-200 text-rose-800">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-rose-800 mx-2">0</span>
                  <Button variant="outline" size="icon" className="border-rose-200 text-rose-800">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 購物車摘要 */}
      <Card className="fixed bottom-8 right-8 w-96 backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
        <CardHeader>
          <CardTitle className="text-rose-800 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            購物車摘要
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-rose-700/80">
            <p>尚未選購商品</p>
          </div>
          <Button className="w-full mt-4 bg-gradient-to-r from-rose-200/80 to-amber-200/80 text-rose-800 border border-white/30 hover:opacity-90">
            確認訂購
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlassmorphismUI;